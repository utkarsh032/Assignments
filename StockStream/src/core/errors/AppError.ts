
export interface AppErrorType extends Error {
  statusCode: number;
  isOperational: boolean;
}

export function AppError (
  message: string,
  statusCode = 400,
  isOperational = true
): AppErrorType {
  const error = new Error(message) as AppErrorType;
  error.statusCode = statusCode;
  error.isOperational = isOperational;

  // Fix prototype chain
  Object.setPrototypeOf(error, new.target?.prototype ?? Object.prototype);

  Error.captureStackTrace(error, AppError);

  return error;
}
