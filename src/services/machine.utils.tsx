import { RequestType, sendRequest } from "./general.utils"


export const validateMachineOwner = async (machineToken: string, userId: string) => {
  return (await sendRequest(`machine/validate/${machineToken}/${userId}`, RequestType.PUT))
}