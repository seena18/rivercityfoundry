
from PIL import Image
import sys
import os

def crop_transparency(path):
    try:
        img = Image.open(path)
        img = img.convert("RGBA")
        
        # Get the bounding box of the non-zero regions
        bbox = img.getbbox()
        
        if bbox:
            # Crop to the bounding box
            cropped = img.crop(bbox)
            
            # Save it back
            cropped.save(path)
            print(f"Successfully cropped {path}")
            
            # Also save to src/app/icon.png and src/app/apple-icon.png if they exist or logic requires
            # The previous context showed we copied public/favicon.png to these locations
            
            destinations = ["src/app/icon.png", "src/app/apple-icon.png"]
            for dest in destinations:
                # Resize if needed? Next.js handles sizing, but keeping it high res is good.
                # Just save the cropped version
                cropped.save(dest)
                print(f"Updated {dest}")
                
        else:
            print(f"No content found in {path}")
            
    except Exception as e:
        print(f"Error processing {path}: {e}")

if __name__ == "__main__":
    crop_transparency("public/favicon.png")
