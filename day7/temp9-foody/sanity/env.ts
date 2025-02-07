export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-07'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)
export const token = assertValue(
  "sk5rvodJTjR5qBJ37Wra5CfQ6hacIYX8pHGWHU87vEVtXLYsEKyHF2ysdvLU2sPVeOkDwL0w2ygm0ppphxsBAmaUhkmgZRG3cgXDswIMILUe0i0dw68bTypr2nXFY7b2dIfL6JXQW7Qq0xgOtmy2TZlbkGhsEQOFzEQbcg37lMMe9Ujj9YAy",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
