const MobileOveriew = () => {
  return (
    <div className="w-full px-4 py-2">
      <div className="border-grey border-2 flex flex-row gap-4 rounded-t-xl  mt-2">
        <div className=" flex flex-col gap-2 justify-center pl-4 pr-8 py-2 border-r-2">
          <div className="text-sm font-medium text-navy-blue  ">
            <p>Total Assessment</p>
          </div>
          <div className="flex flex-row items-center gap-4">
            <div>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="8" fill="#EBE8FD" />
                <g clip-path="url(#clip0_0_482)">
                  <path
                    d="M25.8333 14.1667V17.5H13.3333V14.1667H25.8333ZM25.8333 22.5V25.8333H13.3333V22.5H25.8333ZM26.6667 12.5H12.5C12.0417 12.5 11.6667 12.875 11.6667 13.3333V18.3333C11.6667 18.7917 12.0417 19.1667 12.5 19.1667H26.6667C27.125 19.1667 27.5 18.7917 27.5 18.3333V13.3333C27.5 12.875 27.125 12.5 26.6667 12.5ZM26.6667 20.8333H12.5C12.0417 20.8333 11.6667 21.2083 11.6667 21.6667V26.6667C11.6667 27.125 12.0417 27.5 12.5 27.5H26.6667C27.125 27.5 27.5 27.125 27.5 26.6667V21.6667C27.5 21.2083 27.125 20.8333 26.6667 20.8333Z"
                    fill="#6548EE"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_482">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(10 10)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="text-navy-blue text-lg font-bold">
              <p>34</p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-2 justify-center  pr-10 py-3 ">
          <div className="text-sm font-medium text-navy-blue  ">
            <p>Total Purpose</p>
          </div>
          <div className="flex flex-row items-center gap-4">
            <div>
              <svg
                width="41"
                height="40"
                viewBox="0 0 41 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" width="40" height="40" rx="8" fill="#E5F1FC" />
                <g mask="url(#mask0_0_981)">
                  <path
                    d="M19.5921 24.3362H16.3335C15.1339 24.3362 14.1113 23.9135 13.2657 23.068C12.4202 22.2225 11.9974 21.2 11.9974 20.0005C11.9974 18.801 12.4202 17.7784 13.2657 16.9326C14.1113 16.0869 15.1339 15.6641 16.3335 15.6641H19.5921V17.5599H16.3356C15.6572 17.5599 15.0805 17.7972 14.6056 18.2716C14.1307 18.7461 13.8933 19.3223 13.8933 20.0001C13.8933 20.678 14.1307 21.2541 14.6056 21.7286C15.0805 22.2031 15.6572 22.4403 16.3356 22.4403H19.5921V24.3362ZM17.0522 20.8733V19.1269H23.9481V20.8733H17.0522ZM21.4082 24.3362V22.4403H24.6647C25.3431 22.4403 25.9198 22.2031 26.3947 21.7286C26.8696 21.2541 27.107 20.678 27.107 20.0001C27.107 19.3223 26.8696 18.7461 26.3947 18.2716C25.9198 17.7972 25.3431 17.5599 24.6647 17.5599H21.4082V15.6641H24.6668C25.8665 15.6641 26.8891 16.0868 27.7346 16.9322C28.5801 17.7777 29.0029 18.8002 29.0029 19.9997C29.0029 21.1993 28.5801 22.2219 27.7346 23.0676C26.8891 23.9133 25.8665 24.3362 24.6668 24.3362H21.4082Z"
                    fill="#0073E6"
                  />
                </g>
              </svg>
            </div>
            <div className="text-navy-blue text-lg font-bold">
              <p>11</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 pt-2 pb-4 border-grey border-2 border-t-0 px-4 pb-2  ">
        <div className="text-sm font-medium text-navy-blue">
          <p>Candidates</p>
        </div>
        <div className="flex items-center gap-3">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="8" fill="#EBE8FD" />

            <g mask="url(#mask0_0_489)">
              <path
                d="M10.6787 26.9209V24.4082C10.6787 23.9051 10.8089 23.4427 11.0692 23.0209C11.3295 22.5992 11.6753 22.2774 12.1067 22.0554C12.9778 21.6215 13.8643 21.2953 14.7664 21.0767C15.6684 20.8581 16.5845 20.7488 17.5148 20.7488C18.4514 20.7488 19.3707 20.8573 20.2729 21.0742C21.1751 21.2911 22.0584 21.6166 22.9228 22.0504C23.3542 22.2719 23.7 22.5931 23.9604 23.0139C24.2207 23.4347 24.3508 23.8994 24.3508 24.4079V26.9209H10.6787ZM26.0922 26.9209V24.2565C26.0922 23.6321 25.9237 23.0304 25.5868 22.4512C25.2498 21.8721 24.7639 21.3563 24.1289 20.9037C24.8007 20.9937 25.4358 21.1369 26.0342 21.3333C26.6327 21.5297 27.1961 21.7687 27.7245 22.0504C28.2377 22.3282 28.6321 22.656 28.9076 23.0338C29.1832 23.4117 29.3209 23.8242 29.3209 24.2714V26.9209H26.0922ZM17.5148 19.9155C16.5715 19.9155 15.766 19.5816 15.0983 18.9139C14.4306 18.2462 14.0967 17.4407 14.0967 16.4974C14.0967 15.5542 14.4306 14.7487 15.0983 14.081C15.766 13.4133 16.5715 13.0794 17.5148 13.0794C18.458 13.0794 19.2635 13.4133 19.9312 14.081C20.5989 14.7487 20.9328 15.5542 20.9328 16.4974C20.9328 17.4407 20.5989 18.2462 19.9312 18.9139C19.2635 19.5816 18.458 19.9155 17.5148 19.9155ZM26.0922 16.4974C26.0922 17.4373 25.7576 18.242 25.0884 18.9114C24.4192 19.5808 23.6147 19.9155 22.675 19.9155C22.5184 19.9155 22.3236 19.8973 22.0909 19.8609C21.8581 19.8245 21.6586 19.7822 21.4926 19.7338C21.8742 19.2828 22.1666 18.78 22.3696 18.2255C22.5727 17.6711 22.6742 17.0953 22.6742 16.4982C22.6742 15.9011 22.5727 15.325 22.3696 14.7701C22.1666 14.2151 21.8742 13.7121 21.4926 13.261C21.6903 13.1882 21.8864 13.1398 22.0809 13.1156C22.2753 13.0915 22.4723 13.0794 22.6718 13.0794C23.6124 13.0794 24.4176 13.4141 25.0875 14.0834C25.7573 14.7528 26.0922 15.5574 26.0922 16.4974ZM12.5745 25.0251H22.455V24.4331C22.455 24.2836 22.4168 24.1476 22.3404 24.0253C22.264 23.9029 22.1633 23.8077 22.0383 23.7397C21.3082 23.378 20.5662 23.1051 19.8123 22.9209C19.0584 22.7367 18.2925 22.6446 17.5148 22.6446C16.7436 22.6446 15.9778 22.7367 15.2172 22.9209C14.4566 23.1051 13.7146 23.378 12.9912 23.7397C12.8662 23.8077 12.7655 23.9029 12.6891 24.0253C12.6127 24.1476 12.5745 24.2836 12.5745 24.4331V25.0251ZM17.514 18.0943C17.9529 18.0943 18.3289 17.9381 18.642 17.6255C18.9551 17.3129 19.1117 16.9372 19.1117 16.4982C19.1117 16.0593 18.9554 15.6833 18.6428 15.3702C18.3302 15.0571 17.9545 14.9005 17.5155 14.9005C17.0766 14.9005 16.7006 15.0568 16.3875 15.3694C16.0744 15.682 15.9178 16.0577 15.9178 16.4966C15.9178 16.9356 16.0741 17.3116 16.3867 17.6247C16.6993 17.9378 17.075 18.0943 17.514 18.0943Z"
                fill="#6548EE"
              />
            </g>
          </svg>

          <div className="text-navy-blue border-r-2 border-grey pr-4 ">
            <p className="text-sm font-bold flex items-center gap-1">
              11,145
              <span className="text-green text-xs font-semibold">+89</span>
            </p>
            <p className="text-xs font-medium">Total Candidates</p>
          </div>
          <div className="text-navy-blue ">
            <p className="text-sm font-bold flex items-center gap-1">
              1,14
              <span className="text-green text-xs font-semibold">+89</span>
            </p>
            <p className="text-xs font-medium">Who Attempted</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 pt-2 pb-4 border-grey border-b-2 border-l-2 border-r-2 rounded-b-xl px-4 pb-2 ">
        <div className="text-sm font-medium text-navy-blue">
          <p>Candidates Source</p>
        </div>
        <div className="flex items-center gap-3">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="8" fill="#FCE8EF" />
            <g mask="url(#mask0_0_1009)">
              <path
                d="M17.8332 26.293C17.5832 25.8346 17.3644 25.3589 17.1769 24.8659C16.9894 24.3728 16.8332 23.8624 16.7082 23.3346H14.2498C14.6526 24.0291 15.1561 24.6332 15.7603 25.1471C16.3644 25.661 17.0554 26.043 17.8332 26.293ZM13.5415 21.668H16.3748C16.3332 21.3902 16.3019 21.1159 16.2811 20.8451C16.2603 20.5742 16.2498 20.293 16.2498 20.0013C16.2498 19.7096 16.2603 19.4284 16.2811 19.1576C16.3019 18.8867 16.3332 18.6124 16.3748 18.3346H13.5415C13.4721 18.6124 13.42 18.8867 13.3853 19.1576C13.3505 19.4284 13.3332 19.7096 13.3332 20.0013C13.3332 20.293 13.3505 20.5742 13.3853 20.8451C13.42 21.1159 13.4721 21.3902 13.5415 21.668ZM14.2498 16.668H16.7082C16.8332 16.1402 16.9894 15.6298 17.1769 15.1367C17.3644 14.6437 17.5832 14.168 17.8332 13.7096C17.0554 13.9596 16.3644 14.3416 15.7603 14.8555C15.1561 15.3694 14.6526 15.9735 14.2498 16.668ZM18.4165 16.668H21.5832C21.4165 16.0569 21.2012 15.4805 20.9373 14.9388C20.6734 14.3971 20.3609 13.8763 19.9998 13.3763C19.6387 13.8763 19.3262 14.3971 19.0623 14.9388C18.7984 15.4805 18.5832 16.0569 18.4165 16.668ZM23.2915 16.668H25.7498C25.3471 15.9735 24.8436 15.3694 24.2394 14.8555C23.6353 14.3416 22.9443 13.9596 22.1665 13.7096C22.4165 14.168 22.6353 14.6437 22.8228 15.1367C23.0103 15.6298 23.1665 16.1402 23.2915 16.668ZM19.9998 28.3346C18.8609 28.3346 17.7846 28.1159 16.7707 27.6784C15.7568 27.2409 14.8714 26.6437 14.1144 25.8867C13.3575 25.1298 12.7603 24.2444 12.3228 23.2305C11.8853 22.2166 11.6665 21.1402 11.6665 20.0013C11.6665 18.8485 11.8853 17.7687 12.3228 16.7617C12.7603 15.7548 13.3575 14.8728 14.1144 14.1159C14.8714 13.3589 15.7568 12.7617 16.7707 12.3242C17.7846 11.8867 18.8609 11.668 19.9998 11.668C21.1526 11.668 22.2325 11.8867 23.2394 12.3242C24.2464 12.7617 25.1283 13.3589 25.8853 14.1159C26.6422 14.8728 27.2394 15.7548 27.6769 16.7617C28.1144 17.7687 28.3332 18.8485 28.3332 20.0013C28.3332 20.1402 28.3297 20.2791 28.3228 20.418C28.3158 20.5569 28.3054 20.6957 28.2915 20.8346H26.604C26.6318 20.6957 26.6491 20.5603 26.6561 20.4284C26.663 20.2964 26.6665 20.1541 26.6665 20.0013C26.6665 19.7096 26.6491 19.4284 26.6144 19.1576C26.5797 18.8867 26.5276 18.6124 26.4582 18.3346H23.6248C23.6665 18.6124 23.6978 18.8867 23.7186 19.1576C23.7394 19.4284 23.7498 19.7096 23.7498 20.0013V20.4284C23.7498 20.5603 23.7429 20.6957 23.729 20.8346H22.0623C22.0762 20.6957 22.0832 20.5603 22.0832 20.4284V20.0013C22.0832 19.7096 22.0728 19.4284 22.0519 19.1576C22.0311 18.8867 21.9998 18.6124 21.9582 18.3346H18.0415C17.9998 18.6124 17.9686 18.8867 17.9478 19.1576C17.9269 19.4284 17.9165 19.7096 17.9165 20.0013C17.9165 20.293 17.9269 20.5742 17.9478 20.8451C17.9686 21.1159 17.9998 21.3902 18.0415 21.668H20.8332V23.3346H18.4165C18.5832 23.9457 18.7984 24.5221 19.0623 25.0638C19.3262 25.6055 19.6387 26.1263 19.9998 26.6263C20.1526 26.4041 20.2984 26.1784 20.4373 25.9492C20.5762 25.7201 20.7082 25.4874 20.8332 25.2513V28.293C20.6943 28.3069 20.5589 28.3173 20.4269 28.3242C20.295 28.3312 20.1526 28.3346 19.9998 28.3346ZM26.6248 27.8138L24.1665 25.3555V27.2096H22.4998V22.5013H27.2082V24.168H25.3332L27.7915 26.6263L26.6248 27.8138Z"
                fill="#E9407A"
              />
            </g>
          </svg>

          <div className="text-navy-blue border-r-2 border-grey pr-4 ">
            <p className="text-sm font-bold flex items-center gap-1">
              11,000
              <span className="text-green text-xs font-semibold">+89</span>
            </p>
            <p className="text-xs font-medium">Email</p>
          </div>
          <div className="text-navy-blue border-r-2 border-grey pr-4">
            <p className="text-sm font-bold flex items-center gap-1">
              11,000
              <span className="text-green text-xs font-semibold">+89</span>
            </p>
            <p className="text-xs font-medium">Social Share</p>
          </div>
          <div className="text-navy-blue ">
            <p className="text-sm font-bold flex items-center gap-1">
              11,000
              <span className="text-green text-xs font-semibold">+89</span>
            </p>
            <p className="text-xs font-medium">Unique Link</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileOveriew;
