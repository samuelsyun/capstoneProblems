def swap(arr, i1, i2):
temp = arr[i1]
arr[i1] = arr[i2]
arr[i2] = temp

def dutchNatFlag(arr):

low = 0
mid = 0
high = len(arr) - 1

# one pass through the array swapping
# the necessary elements in place
while mid <= high:
  if arr[mid] == 0:
    swap(arr, low, mid)
    low += 1
    mid += 1
  elif arr[mid] == 2:
    swap(arr, mid, high)
    high -= 1
  elif arr[mid] == 1:
    mid += 1

return arr
