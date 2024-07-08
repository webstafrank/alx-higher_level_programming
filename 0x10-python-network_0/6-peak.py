def find_peak(arr):
    """Finds a peak in a list of unsorted integers"""
    if not arr:
        return None
    
    def find_peak_util(arr, low, high, n):
        mid = low + (high - low) // 2
        
        # Check if mid is a peak
        if (mid == 0 or arr[mid - 1] <= arr[mid]) and (mid == n - 1 or arr[mid + 1] <= arr[mid]):
            return arr[mid]
        
        # If the left neighbor is greater, then the peak is in the left half
        elif mid > 0 and arr[mid - 1] > arr[mid]:
            return find_peak_util(arr, low, mid - 1, n)
        
        # If the right neighbor is greater, then the peak is in the right half
        else:
            return find_peak_util(arr, mid + 1, high, n)
    
    return find_peak_util(arr, 0, len(arr) - 1, len(arr))

# Test cases
if __name__ == "__main__":
    print(find_peak([1, 2, 4, 6, 3]))  # Output: 6
    print(find_peak([4, 2, 1, 2, 3, 1]))  # Output: 4 or 3
    print(find_peak([2, 2, 2]))  # Output: 2
    print(find_peak([]))  # Output: None
    print(find_peak([-2, -4, 2, 1]))  # Output: 2
    print(find_peak([4, 2, 1, 2, 2, 2, 3, 1]))  # Output: 4 or 3
