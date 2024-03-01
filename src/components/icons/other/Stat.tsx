import { IconProps } from "../types";
import defaultIconProps from "../defaultIconProps";

const Stat = ({ className, size = defaultIconProps.size, color = defaultIconProps.color }: IconProps) => {
  return (
    <svg className={className} width={size} viewBox="0 0 189 228" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.5463 32.688C8.80849 26.9423 7.6819 21.0197 7.18633 15.024V14.016L8.65633 13.536C12.1797 12.432 21.9563 8.04 21.9563 2.4V0H167.043V2.4C167.043 8.088 176.82 12.48 180.25 13.584L181.72 14.064V15.072C181.212 21.0659 180.086 26.9872 178.36 32.736L177.333 17.52C173.646 16.104 164.43 12 162.726 4.8H26.273C24.5463 12 15.353 16.104 11.6663 17.52L10.5463 32.688ZM5.41299 190.704H6.06633C6.25299 188.016 6.43966 184.992 6.62633 181.68C3.8153 177.487 2.04488 172.651 1.46966 167.592C1.22959 164.427 1.6417 161.245 2.67907 158.255C3.71644 155.265 5.35569 152.534 7.48966 150.24V147.432C7.48966 147.432 4.26966 85.608 1.30633 75.744L0.932995 74.4L2.02966 73.704C3.90601 72.4203 5.62897 70.9139 7.16299 69.216C8.73934 67.7203 9.97441 65.8845 10.7797 63.84C11.9457 61.3559 12.2583 58.5385 11.6663 55.848C11.6663 55.584 10.313 52.608 9.053 48.648L8.44633 55.488C9.07633 57.384 9.613 59.4 10.103 61.464C9.29599 63.3501 8.04501 64.9997 6.463 66.264C5.85774 63.0076 5.05506 59.7933 4.05966 56.64L3.89633 56.16L6.78966 23.112C6.78966 27.912 10.0097 38.784 10.0097 38.784C11.1374 44.27 12.7783 49.631 14.9097 54.792C15.4065 57.245 15.3736 59.7804 14.8131 62.2188C14.2527 64.6573 13.1785 66.9395 11.6663 68.904C15.5863 91.2 11.853 170.4 11.363 179.736C9.57032 177.153 8.10412 174.347 6.99966 171.384C7.18633 166.584 7.303 161.4 7.373 156C5.29789 159.364 4.35506 163.335 4.68966 167.304C5.26562 171.979 6.94815 176.438 9.58966 180.288L9.93966 180.816L10.9897 182.352L11.1297 182.52C14.9718 187.654 19.478 192.224 24.523 196.104C27.321 197.654 30.039 199.353 32.6663 201.192L33.273 201.624C35.1163 202.92 36.8897 204.24 38.6163 205.584L39.0363 205.896C42.3497 208.512 45.3597 211.104 47.8563 213.36C51.0997 213.36 54.273 213.624 57.1897 213.888C54.355 211.598 51.8491 208.907 49.7463 205.896H41.7897L35.9797 201.096H41.393C40.2848 197.875 39.5944 194.518 39.3397 191.112C38.1195 193.175 36.236 194.734 34.0157 195.518C31.7954 196.303 29.3782 196.264 27.183 195.408C28.5597 195.84 34.183 196.68 39.4097 185.616C39.7744 180.76 41.8681 176.214 45.2897 172.848C41.3668 180.439 40.5277 189.319 42.9563 197.544C43.3379 198.057 43.8287 198.472 44.391 198.76C44.9532 199.047 45.572 199.197 46.1997 199.2C44.954 195.969 44.3204 192.523 44.333 189.048C44.333 168.528 66.873 151.824 94.593 151.824C122.313 151.824 144.666 168.528 144.666 189.048C144.679 192.523 144.045 195.969 142.8 199.2C143.398 199.194 143.988 199.053 144.528 198.788C145.068 198.522 145.545 198.139 145.926 197.664C148.355 189.439 147.516 180.559 143.593 172.968C147.054 176.325 149.182 180.883 149.566 185.76C154.7 196.824 160.393 195.984 161.793 195.552C159.598 196.408 157.181 196.447 154.96 195.662C152.74 194.878 150.857 193.319 149.636 191.256C149.382 194.662 148.691 198.019 147.583 201.24H152.996L147.186 206.04H139.253C137.15 209.051 134.644 211.742 131.81 214.032C134.61 213.768 137.806 213.528 141.143 213.504C143.64 211.248 146.65 208.704 149.963 206.04L150.383 205.728C152.11 204.384 153.883 203.064 155.726 201.768L156.333 201.336C158.961 199.505 161.679 197.815 164.476 196.272C169.521 192.392 174.027 187.822 177.87 182.688L178.01 182.52L179.06 180.984L179.41 180.456C182.084 176.559 183.776 172.04 184.333 167.304C184.621 163.323 183.638 159.354 181.533 156C181.533 161.4 181.72 166.584 181.906 171.384C180.831 174.342 179.396 177.148 177.636 179.736C177.146 170.4 173.413 91.2 177.333 68.904C175.837 66.932 174.781 64.6454 174.241 62.2064C173.7 59.7675 173.689 57.2361 174.206 54.792C176.303 49.6201 177.935 44.2618 179.083 38.784C179.083 38.784 182.35 28.032 182.303 23.112L185.103 56.16L184.94 56.64C183.906 59.8461 183.072 63.1168 182.443 66.432C180.867 65.1554 179.611 63.5096 178.78 61.632C179.293 59.568 179.83 57.552 180.436 55.656L179.853 48.816C178.593 52.68 177.356 55.656 177.24 56.016C176.66 58.7402 177.006 61.5864 178.22 64.08C179.025 66.1245 180.26 67.9604 181.836 69.456C183.37 71.1539 185.093 72.6603 186.97 73.944L188.09 74.64L187.693 75.912C184.753 85.776 181.533 147.6 181.533 147.6C181.533 148.536 181.533 149.496 181.533 150.408C183.667 152.702 185.306 155.433 186.344 158.423C187.381 161.413 187.793 164.595 187.553 167.76C186.959 172.825 185.199 177.671 182.42 181.896C182.583 185.208 182.77 188.232 182.956 190.92H183.61C187.086 190.632 190.12 192.624 188.65 195.12C188.216 195.852 187.632 196.478 186.939 196.955C186.246 197.432 185.46 197.747 184.636 197.88C185.359 197.342 185.957 196.645 186.386 195.84C186.783 195.12 186.386 194.784 186.06 194.616H185.173C184.52 194.58 183.866 194.58 183.213 194.616C183.633 200.16 183.96 203.52 183.983 203.712L184.333 205.896H155.493C152.086 208.296 148.866 211.056 146.16 213.456C151.99 213.338 157.706 215.119 162.493 218.544L156.076 221.16C152.052 222.951 147.872 224.349 143.593 225.336H142.823L142.333 225.6C119.793 229.608 117.436 227.4 117.436 227.4C123.327 227.313 128.972 224.958 133.256 220.8L133.793 220.224C134.026 219.984 135.24 218.736 137.2 216.864C135.753 216.864 134.353 217.032 132.976 217.152H131.95C131.021 217.271 130.101 217.456 129.196 217.704C128.507 217.875 127.829 218.092 127.166 218.352H126.84C126.033 218.633 125.253 218.987 124.506 219.408L124.25 219.576C123.617 219.956 123.016 220.389 122.453 220.872L121.94 221.328C121.279 221.942 120.691 222.635 120.19 223.392L101.78 225.552H101.92C96.9145 226.192 91.8515 226.192 86.8463 225.552H86.9863L68.5763 223.392C68.0733 222.629 67.4773 221.935 66.803 221.328L66.2897 220.848C65.7054 220.365 65.0895 219.924 64.4463 219.528L64.2363 219.384C63.5183 218.987 62.7781 218.635 62.0197 218.328L61.7163 218.4C61.0163 218.136 60.3397 217.92 59.7097 217.752C58.6363 217.488 57.703 217.344 57.0497 217.248H56.023C54.6463 217.248 53.2463 217.032 51.7997 216.96C53.7597 218.832 54.973 220.08 55.183 220.32L55.743 220.896C60.042 225.019 65.6852 227.339 71.563 227.4C71.563 227.4 69.2297 229.608 46.6663 225.6H46.1063H45.3363C41.0564 224.617 36.8766 223.218 32.853 221.424L26.4363 218.808C31.223 215.383 36.9398 213.602 42.7697 213.72C39.9697 211.32 36.7497 208.68 33.4363 206.16H4.66633L4.94633 203.568C4.94633 203.376 5.29633 200.016 5.71633 194.472C5.06346 194.436 4.40919 194.436 3.75633 194.472H2.86966C2.473 194.64 2.14633 194.976 2.54299 195.696C2.96009 196.502 3.55065 197.2 4.26966 197.736C3.46122 197.577 2.69517 197.243 2.02303 196.754C1.35089 196.266 0.788261 195.635 0.372995 194.904C-1.09701 192.504 1.93633 190.416 5.41299 190.704ZM179.153 117.864C180.39 104.28 182.07 83.76 184.17 75.96C183.134 75.2139 182.137 74.4128 181.183 73.56C179.585 88.3002 178.907 103.131 179.153 117.96V117.864ZM174.136 192C175.513 191.609 176.917 191.328 178.336 191.16C178.336 190.056 178.173 188.76 178.103 187.608C176.773 189.216 175.42 190.68 174.136 192ZM162.47 201.168H179.2C179.06 199.584 178.85 197.304 178.64 194.544C172.869 195.604 167.368 197.857 162.47 201.168ZM136.943 221.952H137.106C139.58 223.368 147.7 220.872 154.163 218.136C150.305 217.047 146.309 216.562 142.31 216.696C139.813 219.096 137.923 220.824 136.943 221.832V221.952ZM94.4997 221.136C110.833 221.136 124.833 215.016 132.953 205.896C133.583 205.176 134.19 204.408 134.773 203.64C134.82 203.555 134.874 203.474 134.936 203.4C135.454 202.694 135.929 201.957 136.36 201.192C138.558 197.543 139.736 193.341 139.766 189.048C139.766 171.36 119.466 156.96 94.4997 156.96C69.533 156.96 49.233 171.36 49.233 189.048C49.2665 193.337 50.4362 197.536 52.6163 201.192C53.0597 201.96 53.5497 202.68 54.063 203.4L54.2497 203.64C54.8097 204.408 55.4163 205.176 56.0463 205.896C64.0497 215.016 78.2597 221.136 94.4997 221.136ZM46.6663 216.816C42.6674 216.682 38.6715 217.167 34.813 218.256C41.2997 220.992 49.3963 223.488 51.8697 222.072H52.033C51.053 221.064 49.1863 219.24 46.6663 216.936V216.816ZM10.663 191.184C12.0816 191.355 13.4856 191.635 14.863 192.024C13.5797 190.704 12.2263 189.24 10.8963 187.632C10.8963 188.88 10.733 190.032 10.663 191.184ZM9.84633 201.192H26.5763C21.6759 197.885 16.1755 195.632 10.4063 194.568C10.1963 197.328 9.98633 199.608 9.84633 201.192ZM9.84633 117.864C10.0928 103.035 9.41471 88.2042 7.81633 73.464C6.86197 74.3168 5.86506 75.1179 4.82966 75.864C6.99966 83.76 8.58633 104.28 9.84633 117.864Z" fill={color}/>
    </svg>
  );
};

export default Stat;