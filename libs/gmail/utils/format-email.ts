/* eslint-disable @typescript-eslint/no-explicit-any */
function getEmailBody(message: any) {
  if (message?.payload?.parts?.length > 0) {
    const body = message.payload.parts.find(
      (part: any) =>
        part.mimeType === "text/html" || part.mimeType === "text/html"
    );
    const encodedBody = body?.body?.data;

    if (encodedBody) {
      const decodedBody = Buffer.from(encodedBody, "base64url").toString(
        "utf-8"
      );

      return decodedBody;
    }
  }
}

export const formatEmail = (emailDetail: any) => {
  const payloadHeaders = emailDetail.payload.headers;
  const title = payloadHeaders?.find(
    (item: any) => item?.name === "Subject"
  )?.value;
  const from = payloadHeaders?.find(
    (item: any) => item?.name === "From"
  )?.value;

  const nameAndEmail = from.split("<");
  const fromObj = (() => {
    if (nameAndEmail?.length === 1) {
      return {
        email: nameAndEmail[0]?.replaceAll(">", "")?.trim(),
      };
    }

    return {
      email: nameAndEmail[1]?.replaceAll(">", "")?.trim(),
      name: nameAndEmail[0]?.trim(),
    };
  })();
  return {
    id: emailDetail.id,
    description: emailDetail.snippet,
    title,
    from: fromObj,
    body: getEmailBody(emailDetail),
    ...emailDetail,
    createdAt: parseInt(emailDetail?.internalDate),

    // title:
  };
};
