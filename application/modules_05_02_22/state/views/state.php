<link rel="stylesheet" type="text/css" href="<?= bs() ?>public/b-asset/lib/datatables/datatables.net-bs4/css/dataTables.bootstrap4.css" />
<link rel="stylesheet" type="text/css" href="<?= bs() ?>public/b-asset/lib/datatables/datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css" />

<div class="be-content">
   <div class="page-head">
      <h2 class="page-head-title">State List</h2>
      <nav aria-label="breadcrumb" role="navigation">
         <ol class="breadcrumb page-head-nav">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item"><a href="#">State Manager</a></li>
            <li class="breadcrumb-item active"> State List</li>
         </ol>
      </nav>
   </div>
   <div class="main-content container-fluid">
      <div class="row">
         <div class="col-sm-12">
            <?php if (!empty($this->session->flashdata('success'))) : ?>
               <div class="alert alert-contrast alert-success alert-dismissible" role="alert">
                  <div class="icon"><span class="mdi mdi-check"></span></div>
                  <div class="message">
                     <button class="close" type="button" data-dismiss="alert" aria-label="Close"><span class="mdi mdi-close" aria-hidden="true"></span></button>
                     <strong> <?= $this->session->flashdata('success') ?> </strong>
                  </div>
               </div>
            <?php endif; ?>
            <div class="card card-table  card-border-color card-border-color-primary">
               <div class="card-header"> <span class="icon fa fa-file-text"></span> State List

               </div>
               <div class="card-body">
                  <div class="row">
                     <div class="col-sm-12">
                        <table class="table table-striped table-hover table-fw-widget" id="table1">
                           <thead>
                              <tr>
                                 <th>Title</th>
                                 <th>Category</th>
                                 <th>Status</th>
                                 <th>Actions</th>
                              </tr>
                           </thead>
                           <tbody>
                              <?php if (!empty($posts)) : ?>
                                 <?php
                                 foreach ($posts as $post) :
                                 ?>
							   <?php 
										   $cSlg="";
										   if($post->state_filter ==1){
											   $cSlg="medicare-advantage";
										   }elseif($post->state_filter ==2){
											   $cSlg="medicare-supplement";
										   }elseif($post->state_filter ==3){
											   $cSlg="medicare-part-d";
										   }else{
											   $cSlg="medicare-by-state";
										   }
										   ?>
                                    <tr>
                                       <td><?php echo $post->title ?></td>
                                       <td><?php echo $cSlg; ?></td>
                                       <td>
                                          <?php if ($post->status == 1) : ?>

                                             <a href="<?php bs() ?>state/unpublish/<?php echo $post->id ?>" data-toggle="tooltip" data-placement="top" title="Click to Change Status">
                                                <button type="button" class="btn btn-success btn-xs">Publish</button>
                                             </a>

                                          <?php else : ?>

                                             <a href="<?php bs() ?>state/publish/<?php echo $post->id ?>" data-toggle="tooltip" data-placement="top" title="Click to Change Status">
                                                <button type="button" class="btn btn-danger btn-xs">Unpublish</button>
                                             </a>

                                          <?php endif ?>
                                       </td>
                                       <td>
                                          <a href="<?php bs() ?>state/edit/<?php echo $post->id ?>">
                                             <button class="btn btn-space btn-outline-primary btn-space"> <span class="icon mdi mdi-comment-edit"></span> </button>
                                          </a>
                                          <?php if ($post->status == 0) : ?>

                                             <button class="btn btn-space btn-outline-warning btn-space" data-placement="top" title="This Post is Unpulish" disable data-toggle="tooltip"> 
                                                <span class="icon mdi mdi-open-in-new"></span> 
                                             </button>

                                          <?php else : ?>
										   
                                             <a href="<?php bs() ?><?php echo $cSlg;?>/<?php echo $post->slug ?>" target="_blank">
                                                <button type="button" class="btn btn-space btn-outline-warning btn-space">
                                                   <i class="icon mdi mdi-open-in-new"></i>
                                                </button>
                                             </a>

                                          <?php endif ?>

                                          <a onclick="deleteFunction('<?php bs() ?>state/delete_content/<?php echo $post->id ?>')" href="javascript:void(0)">
                                             <button type="button" class="btn btn-space btn-outline-danger btn-space"><i class="icon mdi mdi-delete"></i></button>
                                          </a>
                                       </td>
                                    </tr>

                                 <?php endforeach ?>

                              <?php else : ?>

                                 <tr >
                                    <td colspan="4" align="center">
                                       <p>
                                       No record found
                                       </p>
                                    </td>
                                 </tr>

                              <?php endif ?>
                           </tbody>
                        </table>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
