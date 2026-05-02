class Sidebar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <section class="sidebar" id="sidebar">
      <div class="nav">
        <ul>
          
          
          <li class="btnToggle" data-div="2" data-chevron="ch2"><a href="#"><i class="fa-regular fa-file"></i> Reports <span><i class="fa fa-chevron-right" aria-hidden="true" id="ch2"></i></span></a>
            <ul id="2" class="toggleDiv">
              <li><a href="#">Basic Reports</a></li>
              <li><a href="#">Peer Reports</a></li>
              <li><a href="#">Hierarchy Reports</a></li>
              <li><a href="#">Draft Entry Reports</a></li>
              <li><a href="#">Question Wise MIS Point Summary MIS</a></li>
            </ul>
          </li>
        <li class="btnToggle" data-div="3" data-chevron="ch3"><a href="#"><i class="fa-solid fa-people-group"></i> RR Committee <span><i class="fa fa-chevron-right" aria-hidden="true" id="ch3"></i></span></a>
          <ul id="3" class="toggleDiv">
            <li><a href="#">Create RR committee</a></li>
            <li class="btnToggle" data-div="6" data-chevron="ch3"><a href="#">RR committee remarks</a>
                <ul id="6" class="toggleDiv">
                  <li><a href="#">Create RR committee</a></li>
                  <li><a href="#">RR committee remarks</a></li>
                </ul> 
            </li>
          </ul>
        </li>
        <li class="btnToggle" data-div="4" data-chevron="ch4"><a href="#"><i class="fa-solid fa-list-check"></i> QC Approval Bin <span><i class="fa fa-chevron-right" aria-hidden="true" id="ch4"></i></span></a>
          <ul id="4" class="toggleDiv">
            <li><a href="#">Pending Approvals</a></li>
          </ul>
        </li>
          <li class="btnToggle" data-div="5" data-chevron="ch5"><a href="#"><i class="fa-solid fa-user-tie"></i> Master <span><i class="fa fa-chevron-right" aria-hidden="true" id="ch5"></i></span></a>
            <ul id="5" class="toggleDiv">
              <li><a href="#">Award Master</a></li>
              <li><a href="#">Role Master</a></li>
              <li><a href="#">Set Quota for Employees</a></li>
              <li><a href="#">Approve/Decline Bulk Nominations</a></li>
              <li><a href="#">Wall of Fame Master</a></li>
              <li><a href="#">Point Request Approval</a></li>
            </ul>
          </li>
        </ul>
      </div>
      
    </section>
          `
    }
  }
  
  
  
  customElements.define('main-sidebar', Sidebar);